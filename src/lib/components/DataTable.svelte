<script lang="ts">
  import type { PaleoFood } from '$lib/models/paleo-food.model';
  
  export let data: PaleoFood[] = [];
  export let onIncrementStok;
  export let onDecrementStok;
</script>

<div class="overflow-x-auto">
  <table class="table-auto w-full border-collapse border border-gray-200">
    <thead class="bg-gray-100">
      <tr>
        <!-- menambahkan w-16 membuat tabelnya mengikuti lebar kontennya tapi mengapa menambahkan w-1 membuatnya menjadi begitu? adakah yang lebih deskriptif daripada w-1? -->
        <th class="border border-gray-300 p-2 w-16 text-center">Nomor</th>
        <th class="border border-gray-300 p-2">Nama Makanan</th>
        <th class="border border-gray-300 p-2">Manfaat</th>
        <th class="border border-gray-300 p-2 w-16 text-center">Stok</th>
        <th class="border border-gray-300 p-2">Aksi</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item (item.id)}
        <tr>
          <td class="border border-gray-300 p-2">
            <div class="flex items-center justify-center space-x-2">{item.id}</div>
          </td>
          <td class="border border-gray-300 p-2">{item.namaMakanan}</td>
          <td class="border border-gray-300 p-2">{item.manfaat}</td>
          <td class="border border-gray-300 p-2 text-center">
            <div class="flex items-center justify-center space-x-2">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full" on:click={() => onIncrementStok?.(item.id)}>+</button>
              <span>{item.stok}</span>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" on:click={() => onDecrementStok?.(item.id)}>-</button>
            </div>
          </td>
          <td class="border border-gray-300 p-2">
            <div class="flex space-x-2">
              <button class="flex-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</button>
              <button class="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Hapus</button>
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>