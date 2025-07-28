  const textArray = [" Bilal Ashraf", "a web developer",];
    let element = document.getElementById("typewriter");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    function type() {
      const currentText = textArray[textIndex];
      if (isDeleting) {
        charIndex--;
        element.textContent = currentText.substring(0, charIndex);
      } else {
        charIndex++;
        element.textContent = currentText.substring(0, charIndex);
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        delay = 1000; // انتظر شوية قبل ما يبدأ يمسح
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        delay = 200; // تأخير بسيط قبل ما يبدأ يكتب الجملة اللي بعد كده
      } else {
        delay = isDeleting ? 50 : 100; // سرعة الكتابة والمسح
      }

      setTimeout(type, delay);
    }

    type(); // تشغيل الدالة
