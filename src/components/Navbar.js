import React from "react";

function Navbar(props) {
  return (
    <>
      <nav class={`bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
  <div class="ml-1 max-w-7xl pt-2 px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
        <div class="p-2 rounded text-xl animate-bounce">
          LazyText
        </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#" class="  rounded-md px-3 py-2 text-sm font-medium" aria-current="page">{props.n1}</a>
            <a href="#" class=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{props.n2}</a>
            <a href="#" class=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{props.n3}</a>
            <a href="#" class=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{props.n4}</a>
          </div>
        </div>
        
      </div>
      <div class="form-check form-switch">
  <input onClick={props.toggleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">{props.n1}</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{props.n2}</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{props.n3}</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{props.n4}</a>
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
