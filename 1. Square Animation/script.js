let box = document.getElementById('box');
        let position = 0;
        let direction = 1; // 1 = right, -1 = left

        function animate() {
            // Move the square
            position += 5 * direction; // Change position based on direction

            // If it reaches 500px, reverse the direction
            if (position >= 500 || position <= 0) {
                direction *= -1;
            }

            // Set the position of the square
            box.style.left = position + 'px';

            // Call the function for the next frame
            requestAnimationFrame(animate);
        }

        // Start the animation
        animate();