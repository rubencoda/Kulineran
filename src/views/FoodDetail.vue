<template>
	<div class="food-detail">
		<Navbar />
		<div class="container">
			<!-- Start Breaccrumb -->
			<div class="row mt-4">
				<div class="col">
					<nav aria-label="breadcrumb ">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><router-link to="/" class="text-dark">Home</router-link></li>
							<li class="breadcrumb-item"><router-link to="/foods" class="text-dark">Food Order </router-link></li>
							<li class="breadcrumb-item active">Food Order</li>
						</ol>
					</nav>
				</div>
			</div>
			<!-- End Breaccrumb -->

			<!-- Start Food Detail -->
			<div class="row mt-3" v-on:submit.prevent>
				<div class="col-md-6">
					<img :src="'../assets/images/' + product.gambar" class="img-fluid shadow" />
				</div>
				<div class="col-md-6">
					<h2>
						<strong>{{ product.nama }}</strong>
					</h2>
					<hr />
					<h4>
						Harga <strong>{{ product.harga }}</strong>
					</h4>
					<form action="" class="mt-4">
						<div class="form-group">
							<label for="jumlah_pemesanan">Jumlah Pesan</label>
							<input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
						</div>
						<div class="form-group">
							<label for="keterangan">Keterangan</label>
							<textarea name="" id="" cols="30" rows="2" class="form-control" placeholder="Keterangan spt : pedas" v-model="pesan.keterangan"></textarea>
						</div>
						<button type="submit" class="btn btn-success" @click="pemesanan"><b-icon-cart></b-icon-cart> Pesan</button>
					</form>
				</div>
			</div>
			<!-- End Food Detail -->
		</div>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
	name: "FoodsDetail",
	components: {
		Navbar,
	},
	data() {
		return {
			product: {},
			pesan: {},
		};
	},
	methods: {
		setProduct(data) {
			this.product = data;
		},
		pemesanan() {
			if (this.pesan.jumlah_pemesanan) {
				this.pesan.products = this.product;
				axios
					.post("http://localhost:3000/keranjangs", this.pesan)
					.then(() => {
						this.$router.push({ path: "/keranjang" });
						this.$toast.success("Pesanan Berhasil", {
							type: "success",
							position: "top-right",
							duration: "3000",
							dismissible: true,
						});
					})
					.catch((error) => console.log("error : ", error));
			} else {
				this.$toast.error("Jumlah Pesanan Harus Diisi", {
					type: "error",
					position: "top-right",
					duration: "3000",
					dismissible: true,
				});
			}
		},
	},
	mounted() {
		axios
			.get("http://localhost:3000/products/" + this.$route.params.id)
			.then((response) => this.setProduct(response.data))
			.catch((error) => console.log("Gagal : ", error));
	},
};
</script>

<style></style>
