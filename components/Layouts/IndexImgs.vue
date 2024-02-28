<template>
  <div class="scroll-parent">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 grids">
      <div class="grid gap-4 scroll-element-up">
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4 scroll-element-down">
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4 scroll-element-up">
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.grids {
  width: 100%;
}
.scroll-parent {
  height: 90%;
  overflow-x: hidden;
}
.scroll-element-up {
  left: 0%;
  top: 0%;
  animation: primary 10s linear infinite;
}
.scroll-element-down {
  left: 0%;
  top: 0%;
  animation: primary2 10s linear infinite;
}

@keyframes primary2 {
  0% {
    -webkit-transform: translateY(-60%);
    transform: translateY(-40%);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes primary {
  100% {
    -webkit-transform: translateY(-60%);
    transform: translateY(-40%);
  }
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
