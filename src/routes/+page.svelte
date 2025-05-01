<script lang="ts">
  // @ts-ignore
  import DataTable from '$lib/components/DataTable.svelte';
  import type { PaleoFood } from '$lib/models/paleo-food.model';
  import DataForm from '$lib/components/DataForm.svelte';

  let dataMakananPaleo: PaleoFood[] = [
    { id: 1, namaMakanan: 'Daging Sapi (Grass-Fed)', manfaat: 'Sumber protein dan zat besi yang baik.', stok: 10 },
    { id: 2, namaMakanan: 'Alpukat', manfaat: 'Kaya akan lemak sehat dan nutrisi.', stok: 25 },
    { id: 3, namaMakanan: 'Brokoli', manfaat: 'Sumber serat dan vitamin C yang tinggi.', stok: 15 },
    { id: 4, namaMakanan: 'Telur Ayam (Free-Range)', manfaat: 'Sumber protein lengkap dan nutrisi penting.', stok: 30 },
    { id: 5, namaMakanan: 'Minyak Zaitun Extra Virgin', manfaat: 'Sumber lemak sehat dan antioksidan.', stok: 12 },
  ];

  function incrementStok(id: number) {
    dataMakananPaleo = dataMakananPaleo.map(item =>
      item.id === id ? { ...item, stok: item.stok + 1 } : item
    );
  }

  function decrementStok(id: number) {
    dataMakananPaleo = dataMakananPaleo.map(item =>
      item.id === id && item.stok > 0 ? { ...item, stok: item.stok - 1 } : item
    );
  }

  let isAdding = false;

  function handleTambahData() {
    isAdding = true;
  }

  function handleSimpanDataBaru(newData: Omit<PaleoFood, 'id'>) {
    const newId = dataMakananPaleo.length > 0 ? Math.max(...dataMakananPaleo.map(item => item.id)) + 1 : 1;
    const newItem: PaleoFood = { id: newId, ...newData };
    dataMakananPaleo = [...dataMakananPaleo, newItem];
    isAdding = false;
  }

  let isEditing = false;
  let editingId: number | null = null;
  let itemToEdit: PaleoFood | null = null;

  function handleEdit(id: number) {
    editingId = id;
    itemToEdit = dataMakananPaleo.find(item => item.id === id) || null;
    isEditing = true;
    isAdding = false;
  }

  function handleSimpanPerubahanData(updatedData: PaleoFood) {
    dataMakananPaleo = dataMakananPaleo.map(item =>
      item.id === updatedData.id ? updatedData : item
    );
    itemToEdit = null
    isEditing = false;
    editingId = null;
  }


  function handleBatalDataForm() {
    isAdding = false;
    isEditing = false;
    itemToEdit = null;
  }
  
  function handleDelete(id: number) {
    dataMakananPaleo = dataMakananPaleo.filter(item => item.id !== id);
  }
</script>

<svelte:head>
  <title>Data Makanan Paleo</title>
</svelte:head>


<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Daftar Makanan Paleo</h1>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" on:click={handleTambahData}>
    Tambah Data
  </button>

  {#if isAdding || isEditing}
    <div class="fixed top-0 left-0 w-full h-full flex bg-black opacity-60 justify-center items-center"></div>
    <DataForm
      onCancel={handleBatalDataForm}
      onSaveNew={handleSimpanDataBaru}
      onSaveEdit={handleSimpanPerubahanData}
      initialData={itemToEdit}
    />
  {/if}

  <DataTable
    data={dataMakananPaleo}
    onIncrementStok={incrementStok}
    onDecrementStok={decrementStok}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />
</div>