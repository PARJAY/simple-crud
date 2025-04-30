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
        <th class="border border-gray-300 p-2">ID</th>
        <th class="border border-gray-300 p-2">Nama Makanan</th>
        <th class="border border-gray-300 p-2">Manfaat</th>
        <th class="border border-gray-300 p-2">Stok</th>
        <th class="border border-gray-300 p-2">Aksi</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item (item.id)}
        <tr>
          <td class="border border-gray-300 p-2">{item.id}</td>
          <td class="border border-gray-300 p-2">{item.namaMakanan}</td>
          <td class="border border-gray-300 p-2">{item.manfaat}</td>
          <td class="border border-gray-300 p-2">
            <div class="flex items-center space-x-2">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full" on:click={() => onIncrementStok?.(item.id)}>+</button>
              <span>{item.stok}</span>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" on:click={() => onDecrementStok?.(item.id)}>-</button>
            </div>
          </td>
          <td class="border border-gray-300 p-2">
            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">Edit</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Hapus</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>