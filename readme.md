# Image Slider 

This is a simple image slider implemented using HTML, CSS, and JavaScript. The slider allows users to view different images by clicking the previous and next arrows or clicking on the dots.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Code Explanation](#code-explanation)
  - [Image Array](#image-array)
  - [Event Listeners](#event-listeners)
  - [Update Slide Function](#update-slide-function)
  - [Next and Previous Slide Functions](#next-and-previous-slide-functions)
  - [Set Slide Function](#set-slide-function)
- [Usage](#usage)
- [Contributing](#contributing)


## Overview

This image slider consists of the following components:
- An array of image paths (`images`) to be displayed in the slider.
- Previous and next arrow buttons (`leftBtn` and `rightBtn`) to navigate through the images.
- Dots (`dots`) at the bottom of the slider to indicate the current image.
- An image element (`innerImg`) to display the current image.
- JavaScript code to handle the slider functionality.

## Getting Started

To use this image slider, you can follow these steps:
1. Clone the repository or create an HTML file and add the HTML, CSS, and JavaScript code provided.
2. Update the `images` array with the paths to your desired images.
3. Open the HTML file in a web browser to see the image slider in action.

## Code Explanation

### Image Array

The `images` array contains the paths of different images to be displayed in the slider. You can customize the array by adding or removing image paths.

### Event Listeners

The code adds click event listeners to each dot element to handle navigation when a dot is clicked. The event listeners call the `setSlide()` function to display the image corresponding to the clicked dot.

### Update Slide Function

The `updateSlide()` function updates the slider with the current image. It sets the `src` attribute of the `innerImg` element to the image path specified by the `currentSlide` index. Additionally, it highlights the dot corresponding to the current slide.

### Next and Previous Slide Functions

The `nextSlide()` and `prevSlide()` functions handle navigation to the next and previous images, respectively. They update the `currentSlide` index and call the `updateSlide()` function to display the new image.

### Set Slide Function

The `setSlide(index)` function is used to set the current slide to a specific index. It updates the `currentSlide` with the provided `index` and then calls the `updateSlide()` function to display the corresponding image.

## Usage

You can use this image slider to showcase a collection of images or create an interactive image gallery on your website.

## Contributing

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests. Your contributions are welcome and appreciated!



