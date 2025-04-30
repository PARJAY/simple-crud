<script lang="ts">
  import type { PaleoFood } from '$lib/models/paleo-food.model';

  /** @type {() => void} */
  export let onCancel: () => void;

  /** @type {(newData: Omit<PaleoFood, 'id'>) => void} */
  export let onSave: (newData: Omit<PaleoFood, 'id'>) => void;

  let paleoFoodData = {
    namaMakanan: '',
    manfaat: '',
    stok: 0,
  };

  function handleSave() {
    if (paleoFoodData.namaMakanan && paleoFoodData.manfaat) {
      onSave?.(paleoFoodData);
      // Reset form setelah menyimpan
      paleoFoodData = {
        namaMakanan: '',
        manfaat: '',
        stok: 0,
      };
    } else {
      alert('Nama Makanan dan Manfaat harus diisi.');
    }
  }
</script>

<div class="fixed top-0 left-0 w-full h-full flex justify-center items-center">
  <div class="bg-white rounded-md shadow-xl p-6 w-full max-w-md">
    <h2 class="text-xl font-bold mb-4">Tambah Makanan Paleo Baru</h2>

    <div class="mb-4">
      <label for="namaMakanan" class="block text-gray-700 text-sm font-bold mb-2">Nama Makanan:</label>
      <input
        type="text"
        id="namaMakanan"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={paleoFoodData.namaMakanan}
      />
    </div>

    <div class="mb-4">
      <label for="manfaat" class="block text-gray-700 text-sm font-bold mb-2">Manfaat:</label>
      <textarea
        id="manfaat"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={paleoFoodData.manfaat}
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="stok" class="block text-gray-700 text-sm font-bold mb-2">Stok:</label>
      <input
        type="number"
        id="stok"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={paleoFoodData.stok}
        min="0"
      />
    </div>

    <div class="flex justify-end">
      <button
        type="button"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
        on:click={onCancel}
      >
        Batal
      </button>
      <button
        type="button"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        on:click={handleSave}
      >
        Simpan
      </button>
    </div>
  </div>
</div>