function toggleIngredients(){
    const list=document.getElementById("myingredients");
    const button=document.querySelector("button");
    if(list.style.display=='none'){
        list.style.display='block';
        button.textContent='Hide Ingredients';
    }
    else{
        list.style.display='none';
        button.textContent='Show Ingredients';
    }
}
let currentStep=0;
    function startCooking() {
      const steps = document.querySelectorAll(".steps li");
      steps.forEach(step => step.style.display = "none");
      steps[0].style.display = "list-item";
      document.getElementById("nextBtn").style.display = "inline-block";
      currentStep = 0;
      updateProgress();
    }

    function nextStep() {
      const steps = document.querySelectorAll(".steps li");
      if (currentStep < steps.length - 1) {
        steps[currentStep + 1].style.display = "list-item";
        currentStep++;
        updateProgress();
      } else {
        document.getElementById("nextBtn").innerText = "Done!";
        updateProgress();
      }
    }

    function updateProgress() {
      const steps = document.querySelectorAll(".steps li");
      const percent = ((currentStep + 1) / steps.length) * 100;
      document.getElementById("progressFill").style.width = percent + "%";
    }
