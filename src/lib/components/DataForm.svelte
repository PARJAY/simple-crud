<script lang="ts">
  import type { PaleoFood } from '$lib/models/paleo-food.model';

  /** @type {PaleoFood | null} */
  export let initialData: PaleoFood | null = null;

  /** @type {() => void} */
  export let onCancel: () => void;

  /** @type {(newData: Omit<PaleoFood, 'id'>) => void} */
  export let onSaveNew: (data: Omit<PaleoFood, 'id'>) => void;

  /** @type {(data: PaleoFood) => void} */
  export let onSaveEdit: (data: PaleoFood) => void;

  let namaMakanan = initialData?.namaMakanan || '';
  let manfaat = initialData?.manfaat || '';
  let stok = initialData?.stok || 0;

  $: formTitle = initialData?.id ? 'Edit Makanan Paleo' : 'Tambah Makanan Paleo Baru';

  function handleSave() {
    if (!namaMakanan || !manfaat) {
      alert('Nama Makanan dan Manfaat harus diisi.');
      return;
    }

    if (initialData?.id) onSaveEdit?.({ id: initialData.id, namaMakanan, manfaat, stok });
    else onSaveNew?.({ namaMakanan, manfaat, stok });

    resetFormData();
  }

  function resetFormData() {
    namaMakanan = '';
    manfaat = '';
    stok = 0;
  }
</script>

<div class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
  <div class="bg-white rounded-md shadow-xl p-6 w-full max-w-md z-50">
    <h2 class="text-xl font-bold mb-4">{formTitle}</h2>

    <div class="mb-4">
      <label for="namaMakanan" class="block text-gray-700 text-sm font-bold mb-2">Nama Makanan:</label>
      <input
        type="text"
        id="namaMakanan"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={namaMakanan}
      />
    </div>

    <div class="mb-4">
      <label for="manfaat" class="block text-gray-700 text-sm font-bold mb-2">Manfaat:</label>
      <textarea
        id="manfaat"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={manfaat}
      ></textarea>
    </div>

    <div class="mb-4">
      <label for="stok" class="block text-gray-700 text-sm font-bold mb-2">Stok:</label>
      <input
        type="number"
        id="stok"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        bind:value={stok}
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