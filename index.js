const calculateFormEl = document.getElementById('calculateForm');
const resultEl = document.getElementById('result')

const calculateMarks = (event) => {
        const maxMarks = 400;
        event.preventDefault();

        const formData = new FormData(calculateFormEl);
        const data = {};
        formData.forEach((value, key) => {
                data[key] = +value;
        });


        const totalMarks = data.math + data.english + data.science + data.bangla;
        const percentage = Math.floor((totalMarks / maxMarks) * 100);
        resultEl.innerText = `You have got ${totalMarks} out of ${maxMarks} and your percentage is ${percentage}%`;
};