var currentGallery;
var currentGalleryFilter;
var randomPoolFilter = document.getElementById('random-pool-filter');
var uploadedFilter = document.getElementById('uploaded-filter');
var uploadedGallery = document.getElementById('gallery-uploaded');
var randomPoolGallery = document.getElementById('gallery-random-pool');

currentGallery = uploadedGallery;
currentGalleryFilter = uploadedFilter;

randomPoolFilter.onclick = function(){
	if(currentGallery != randomPoolGallery){

		currentGalleryFilter.classList.remove('gallery-filter-selected');
		randomPoolFilter.classList.add('gallery-filter-selected');
		currentGalleryFilter = this;
		currentGallery.style.display = 'none';
		randomPoolGallery.style.display = 'flex';
		currentGallery = randomPoolGallery;

	}
}

uploadedFilter.onclick = function(){
	if(currentGallery != this){
		currentGalleryFilter.classList.remove('gallery-filter-selected');
		this.classList.add('gallery-filter-selected');
		currentGalleryFilter = this;
		currentGallery.style.display = 'none';
		uploadedGallery.style.display = 'flex';
		currentGallery = uploadedGallery;
	}
}