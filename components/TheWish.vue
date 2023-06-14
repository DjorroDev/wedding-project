<script setup>
import {
  addDoc,
  query,
  getDocs,
  collection,
  Timestamp,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

const { $firestore } = useNuxtApp();

const newWish = reactive({
  name: "",
  wish: "",
  date: null,
});

const wishes = ref([]);
const isLoading = ref(false);
const error = ref("");
const limitWish = 4;
let lastItem = null;
const allDataLoaded = ref(null);

onMounted(async () => {
  fetchData();
});

const fetchData = async () => {
  wishes.value = [];
  const q = query(collection($firestore, "wishes"), orderBy("date", "desc"), limit(limitWish));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    wishes.value.push(doc.data());
  });

  if (querySnapshot.docs.length > 0) {
    lastItem = querySnapshot.docs[querySnapshot.docs.length - 1];
    allDataLoaded.value = false;
  } else {
    allDataLoaded.value = true;
  }
};

const submitWish = async () => {
  newWish.date = Timestamp.fromDate(new Date());
  isLoading.value = true;

  if (newWish.name === "" || newWish.wish === "") {
    error.value = "Data tidak bisa kosong dan wajib diisi";
    isLoading.value = false;
    return;
  }

  await addDoc(collection($firestore, "wishes"), newWish).then((res) => {
    isLoading.value = false;
    fetchData();
  });
};

const loadMore = async () => {
  const q = query(
    collection($firestore, "wishes"),
    orderBy("date", "desc"),
    startAfter(lastItem),
    limit(limitWish)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    wishes.value.push(doc.data());
  });

  // Update the last item and check if all data has been loaded
  if (querySnapshot.docs.length > 0) {
    lastItem = querySnapshot.docs[querySnapshot.docs.length - 1];
    allDataLoaded.value = false;
  } else {
    allDataLoaded.value = true;
  }
};
</script>

<template>
  <section class="py-10 h-auto bg-[#2b2b28] text-[#f1d6ab]">
    <div class="max-w-4xl container mx-auto flex justify-center flex-col items-center">
      <h2 class="text-6xl mb-5 text-center font-script">Make a Wish</h2>
      <p class="text-center px-4 font-desc">
        It is an honor and pleasure for us, if you can attend and give us your blessing
      </p>
      <div
        class="container max-w-4xl px-4 sm:px-2 flex flex-col gap-10 my-10 mx-auto text-[#2b2b28] font-heading"
      >
        <div class="flex flex-col gap-3">
          <p v-if="error" class="p-2 text-start text-red-500 mb-3 bg-red-50 max-w-fit font-bold">
            {{ error }}
          </p>
          <label class="text-[#f1d6ab] text-xl" for="">Your Name</label>
          <input
            v-model="newWish.name"
            class="h-12 p-3 font-desc rounded"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div class="flex flex-col gap-3">
          <label class="text-[#f1d6ab] text-xl" for="">Your Wish</label>
          <textarea
            v-model="newWish.wish"
            class="h-40 font-desc p-3 rounded"
            type="desc"
            placeholder="Congratulations!"
          />
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="submitWish()"
            class="px-1 py-3 bg-[#f1d6ab] w-32 rounded font-bold text-xl hover:bg-[#d7be96] active:bg-[#c4ad88]"
          >
            Submit
          </button>
          <div
            v-if="isLoading"
            class="w-8 h-8 border-4 rounded-full border-[#171716] border-r-[#f1d6ab] animate-spin"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 px-4 sm:px-2">
        <TheWishCard v-for="(wish, index) in wishes" :key="index" :data="wish" />
      </div>

      <button
        v-if="!allDataLoaded"
        @click="loadMore()"
        class="px-3 py-3 mt-10 bg-[#f1d6ab] rounded text-black font-heading font-bold text-xl hover:bg-[#d7be96] active:bg-[#c4ad88]"
      >
        Load More
      </button>
    </div>
  </section>
</template>
