<main class="p-5">
  <h1 class="text-center text-lg text-green-400">Hello world</h1>

  <div class="my-4 h-10 w-full rounded-lg border-2 border-violet-600 bg-violet-200 p-2">
    <p class="text-center font-mono text-[15px] font-extrabold">A div</p>
  </div>
  <!-- layout -->
  <div class="fixed top-0 h-10 w-10 bg-red-500"></div>
  <div class="flex justify-evenly space-x-2">
    <div class="h-16 w-16 rounded-full bg-green-500"></div>
    <div class="h-16 w-16 rounded-full bg-green-500"></div>
  </div>

  <div class="grid grid-cols-5 gap-3">
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
    <div class="h-5 bg-violet-500"></div>
  </div>
  <div class="hidden md:block">
    <p class="text-red-500">I will appear for device resultion > 768px</p>
  </div>
  <div class="hidden text-green-500 max-md:block">
    <p>I will appear for device resultion < 768px</p>
  </div>
  <button class="my-2 rounded-lg bg-blue-400 px-3 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-100 active:bg-red-800">Click me</button>

  <ul class="my-2 space-y-2">
    <li class="bg-white p-2 first:bg-yellow-100">Item 1</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 3</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 4</li>
    <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 5</li>
  </ul>

  <!-- theme -->
  <div class="card">
    <h3 class="text-base font-medium tracking-tight text-slate-900">This is a text element</h3>
    <p class="mt-2 text-sm text-slate-500">This is an even longer p tag element</p>
    <button id="toggleDark" class="special-button" onclick="document.body.classList.toggle('dark')">Toggle Button</button>
  </div>
  <p class="text-chestnutRed bg-stone-100 p-2 text-[15px]">Chestnut color</p>
</main>
