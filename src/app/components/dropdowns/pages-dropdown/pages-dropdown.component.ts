import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-pages-dropdown",
  templateUrl: "./pages-dropdown.component.html",
})
export class NotificationDropdownComponent implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  popper = document.createElement("div");
  ngOnInit() {
    this.popper.innerHTML = `<div class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" #popoverDropdownRef>
  <span
    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
  >
    Admin Layout
  </span>
  <a
    [routerLink]="['/admin/dashboard']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Dashboard
  </a>
  <a
    [routerLink]="['/admin/settings']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Settings
  </a>
  <a
    [routerLink]="['/admin/tables']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Tables
  </a>
  <a
    [routerLink]="['/admin/maps']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Maps
  </a>
  <div class="h-0 mx-4 my-2 border border-solid border-gray-200" />
  <span
    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
  >
    Auth Layout
  </span>
  <a
    [routerLink]="['/auth/login']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Login
  </a>
  <a
    [routerLink]="['/auth/register']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Register
  </a>
  <div class="h-0 mx-4 my-2 border border-solid border-gray-200" />
  <span
    class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
  >
    No Layout
  </span>
  <a
    [routerLink]="['/landing']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Lading
  </a>
  <a
    [routerLink]="['/profile']"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  >
    Profile
  </a>
</div>`;
  }
  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
      this.destroyPopper();
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  destroyPopper() {
    this.popper.parentNode.removeChild(this.popper);
  }
  createPoppper() {
    createPopper(this.btnDropdownRef.nativeElement, this.popper, {
      placement: "bottom-end",
    });
    this.btnDropdownRef.nativeElement.parentNode.insertBefore(
      this.popper,
      this.btnDropdownRef.nativeElement.nextSibling
    );
  }
}
