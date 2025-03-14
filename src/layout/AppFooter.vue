<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          <p>
            <a href="/terms">Terms of Service</a> |
            <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #002061;
  color: white;
  padding: 20px;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
