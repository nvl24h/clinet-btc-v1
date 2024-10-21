<script setup>
import {contacts, socials, logo} from "@/utils";
</script>

<template>
  <header class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="d-flex gap-3 align-items-center">
            <div
              class="d-flex gap-2"
              v-for="contact in contacts"
              :key="contact.type"
            >
              <img
                class="mt-1"
                :src="contact.icon"
                :alt="contact.type"
                style="height: 16px; width: auto; object-fit: cover"
              />
              <div class="">
                <p class="mb-0">{{ contact.label }}</p>
                <strong class="text-truncate">{{ contact.value }}</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 d-md-block d-none">
          <div>
            <!-- form search -->
            <form action="">
              <input
                class="form-control rounded-pill"
                type="text"
                name=""
                id=""
                placeholder="Tìm kiếm sản phẩm"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
