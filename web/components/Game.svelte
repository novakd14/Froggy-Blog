<script>
	const srcFly = "/Froggy-Blog/fly.png";
	const srcFrog = "/Froggy-Blog/frog.png";
	const srcLily = "/Froggy-Blog/lily.png";
	const srcReeds = "/Froggy-Blog/reeds.png";

	const cardImages = [
		{ src: srcFly },
		{ src: srcFrog },
		{ src: srcLily },
		{ src: srcReeds },
	];

	let cards = [...cardImages, ...cardImages];

	const shuffleCards = () => {
		console.log(cardImages);
	};
</script>

<div class="w-9/10 max-w-150 m-auto border-2 rounded-xl mt-10">
	<div class="w-min m-auto">
		<button
			class="text-center whitespace-nowrap font-bold p-2 pt-1 pb-1 border-2 rounded-xl mt-2 bg-[#5dab91] hover:bg-[#378f71] cursor-pointer"
			on:click={shuffleCards}
		>
			Nová hra
		</button>
	</div>
	<div class="grid grid-cols-4 gap-4 m-4">
		{#each cards as card}
			<img src={card.src} alt="Obrázek" class="border-2 rounded-xl" />
		{/each}
	</div>
</div>
