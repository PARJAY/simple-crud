import { q as ensure_array_like, t as bind_props, l as pop, p as push, u as fallback, v as head } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function DataTable($$payload, $$props) {
  push();
  let data = fallback($$props["data"], () => [], true);
  let onIncrementStok = $$props["onIncrementStok"];
  let onDecrementStok = $$props["onDecrementStok"];
  let onEdit = $$props["onEdit"];
  let onDelete = $$props["onDelete"];
  const each_array = ensure_array_like(data);
  $$payload.out += `<div class="overflow-x-auto"><table class="table-auto w-full border-collapse border border-gray-200"><thead class="bg-gray-100"><tr><th class="border border-gray-300 p-2 w-16 text-center">Nomor</th><th class="border border-gray-300 p-2">Nama Makanan</th><th class="border border-gray-300 p-2">Manfaat</th><th class="border border-gray-300 p-2 w-16 text-center">Stok</th><th class="border border-gray-300 p-2">Aksi</th></tr></thead><tbody><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<tr><td class="border border-gray-300 p-2"><div class="flex items-center justify-center space-x-2">${escape_html(item.id)}</div></td><td class="border border-gray-300 p-2">${escape_html(item.namaMakanan)}</td><td class="border border-gray-300 p-2">${escape_html(item.manfaat)}</td><td class="border border-gray-300 p-2 text-center"><div class="flex items-center justify-center space-x-2"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full">+</button> <span>${escape_html(item.stok)}</span> <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full">-</button></div></td><td class="border border-gray-300 p-2"><div class="flex space-x-2"><button class="flex-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">Edit</button> <button class="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Hapus</button></div></td></tr>`;
  }
  $$payload.out += `<!--]--></tbody></table></div>`;
  bind_props($$props, {
    data,
    onIncrementStok,
    onDecrementStok,
    onEdit,
    onDelete
  });
  pop();
}
function DataForm($$payload, $$props) {
  push();
  let formTitle;
  let initialData = fallback($$props["initialData"], null);
  let onCancel = $$props["onCancel"];
  let onSaveNew = $$props["onSaveNew"];
  let onSaveEdit = $$props["onSaveEdit"];
  let namaMakanan = initialData?.namaMakanan || "";
  let manfaat = initialData?.manfaat || "";
  let stok = initialData?.stok || 0;
  formTitle = initialData?.id ? "Edit Makanan Paleo" : "Tambah Makanan Paleo Baru";
  $$payload.out += `<div class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50"><div class="bg-white rounded-md shadow-xl p-6 w-full max-w-md z-50"><h2 class="text-xl font-bold mb-4">${escape_html(formTitle)}</h2> <div class="mb-4"><label for="namaMakanan" class="block text-gray-700 text-sm font-bold mb-2">Nama Makanan:</label> <input type="text" id="namaMakanan" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${attr("value", namaMakanan)}></div> <div class="mb-4"><label for="manfaat" class="block text-gray-700 text-sm font-bold mb-2">Manfaat:</label> <textarea id="manfaat" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">`;
  const $$body = escape_html(manfaat);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="mb-4"><label for="stok" class="block text-gray-700 text-sm font-bold mb-2">Stok:</label> <input type="number" id="stok" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"${attr("value", stok)} min="0"></div> <div class="flex justify-end"><button type="button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Batal</button> <button type="button" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Simpan</button></div></div></div>`;
  bind_props($$props, {
    initialData,
    onCancel,
    onSaveNew,
    onSaveEdit
  });
  pop();
}
function _page($$payload) {
  let dataMakananPaleo = [
    {
      id: 1,
      namaMakanan: "Daging Sapi (Grass-Fed)",
      manfaat: "Sumber protein dan zat besi yang baik.",
      stok: 10
    },
    {
      id: 2,
      namaMakanan: "Alpukat",
      manfaat: "Kaya akan lemak sehat dan nutrisi.",
      stok: 25
    },
    {
      id: 3,
      namaMakanan: "Brokoli",
      manfaat: "Sumber serat dan vitamin C yang tinggi.",
      stok: 15
    },
    {
      id: 4,
      namaMakanan: "Telur Ayam (Free-Range)",
      manfaat: "Sumber protein lengkap dan nutrisi penting.",
      stok: 30
    },
    {
      id: 5,
      namaMakanan: "Minyak Zaitun Extra Virgin",
      manfaat: "Sumber lemak sehat dan antioksidan.",
      stok: 12
    }
  ];
  function incrementStok(id) {
    dataMakananPaleo = dataMakananPaleo.map((item) => item.id === id ? { ...item, stok: item.stok + 1 } : item);
  }
  function decrementStok(id) {
    dataMakananPaleo = dataMakananPaleo.map((item) => item.id === id && item.stok > 0 ? { ...item, stok: item.stok - 1 } : item);
  }
  let isAdding = false;
  function handleSimpanDataBaru(newData) {
    const newId = dataMakananPaleo.length > 0 ? Math.max(...dataMakananPaleo.map((item) => item.id)) + 1 : 1;
    const newItem = { id: newId, ...newData };
    dataMakananPaleo = [...dataMakananPaleo, newItem];
    isAdding = false;
  }
  let isEditing = false;
  let itemToEdit = null;
  function handleEdit(id) {
    itemToEdit = dataMakananPaleo.find((item) => item.id === id) || null;
    isEditing = true;
    isAdding = false;
  }
  function handleSimpanPerubahanData(updatedData) {
    dataMakananPaleo = dataMakananPaleo.map((item) => item.id === updatedData.id ? updatedData : item);
    itemToEdit = null;
    isEditing = false;
  }
  function handleBatalDataForm() {
    isAdding = false;
    isEditing = false;
    itemToEdit = null;
  }
  function handleDelete(id) {
    dataMakananPaleo = dataMakananPaleo.filter((item) => item.id !== id);
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Data Makanan Paleo</title>`;
  });
  $$payload.out += `<div class="container mx-auto p-4"><h1 class="text-2xl font-bold mb-4">Daftar Makanan Paleo</h1> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">Tambah Data</button> `;
  if (isAdding || isEditing) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="fixed top-0 left-0 w-full h-full flex bg-black opacity-60 justify-center items-center"></div> `;
    DataForm($$payload, {
      onCancel: handleBatalDataForm,
      onSaveNew: handleSimpanDataBaru,
      onSaveEdit: handleSimpanPerubahanData,
      initialData: itemToEdit
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  DataTable($$payload, {
    data: dataMakananPaleo,
    onIncrementStok: incrementStok,
    onDecrementStok: decrementStok,
    onEdit: handleEdit,
    onDelete: handleDelete
  });
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
