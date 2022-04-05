import React from 'react'

const Navbar = () => {
    return (
        
<nav class="bg-gray-800 fixed w-full">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex-1 flex items-center justify-start">
        
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <a href="#home" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-large text-lg">Home</a>

            <a href="#volunteering" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Volunteering</a>

            <a href="#events" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Events</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 text-white">
        <div class="text-gray-300  px-3 py-2 rounded-md text-lg font-medium">
            TAMS CHESS CLUB
        </div>
    </div>
  </div>

 
  
  </div>
</nav>
    )
}

export default Navbar
