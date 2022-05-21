<template>
	<div class="pesanan-sukses">
		<Navbar />
		<div class="container">
			<div class="row justify-content-center mt-5">
				<div class="col text-center">
					<img src="../assets/images/menunggu.png" alt="" width="300" />
					<h1><strong>Pemesanan Berhasil</strong></h1>
					<h4>Pesanan Anda Segera diproses</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
	name: "PesananSukses",
	components: {
		Navbar,
	},
};
</script>

<style></style>
