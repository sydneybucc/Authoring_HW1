// this is the new way to do javascript app development
// everything gets wrapped in an object

(function () {
  var theImages = document.querySelector('.image-holder'),
      theHeader = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

  var changeElements() {
    // i want to load dynamic content here
    //debugger;
    let subImages = document.querySelector('.subImagesContainer');
    let objectIndex = dynamicContent[this.id];

    // create an image element and add it to the page
    objectIndex.images.forEach(function(element, index){
      let newSubImg = document.createElement('img');

      //add a css class
      newSubImg.classList.add('thumb');
      // add an image source
      newSubImg.src = "images/" + objectIndex.images[index];
      //append it to the container
      subImages.appendChild(newSubImg);
    });

    theSubhead.classList.remove(appliedClass);
    theHeader.classLast.remove(appliedClass);

    theSubhead.classList.add(this.id);
    theHeader.classLast.add(this.id);

    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;

    appliedClass = this.id;
  }

  theImages.forEach(function(element, index) {
    //loop through and do stuff to each element at the top of the page
    element.addEventListener('click', changeElements, false);
  });
})();
