import React from 'react'
import { CgAddR, CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

/* Don't forget to change all the href for all buttons */

const NavBar = () => {
  return (
    <nav class="navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">📜🖊 RecipeApp</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><AiOutlineHome /> Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><IoIosLogIn /> Login</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"><CgProfile /> View Profile</a></li>
                  <li><a class="dropdown-item" href="#"><CgAddR /> Write a Recipe</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <script>
        {/* Make some logic on the viewing of the login / profile dropdown menu */}
      </script>
    </nav>
  )
}

export default NavBar