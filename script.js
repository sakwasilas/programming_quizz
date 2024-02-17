let question;
let codeSnippet; // Added reference to code snippet container
let form;
let res;
let qno;
let score;

const questions = [
    {
        title: 'python belongs to which programming paradigm?',
        options: [
            'structured', 
            'visual programming', 
            'Database', 
            'object oriented and procedural'
        ],
        answer: '3',
        score: 3
    },
    {
        title: 'What is a variable?',
        options: [
            'Container',
            'An object',
            'An identifier',
            'I dont know yet'
        ],
        answer: '0',
        score: 3
    },
    {
        title: 'What is the output of the following code  print("2+3")?',
        options: [
            '5',
            '2+3',
            '6',
            'All of above'
        ],
        answer: '1',
        score: 3
    },
    {
        title: 'identify the error if x==3 print("The value of x=3") ?',
        options: [
            'use of double equals sign',
            'missing colon after 3',
            'variable x not declared',
            'All of above'
        ],
        answer: '1',
        score: 3
    },
    {
        title: `What is the output of the following program:
        sampleSet = {"Jodi", "Eric", "Garry"}
        sampleSet.add(1, "Vicki")
        print(sampleSet)`,
        options: [
            '‘Vicki’, ‘Jodi’, ‘Garry’, ‘Eric’',
            '‘Jodi’, ‘Vicki’, ‘Garry’, ‘Eric’',
            'The program executed with error'
        ],
        answer: '0',
        score: 3
    },
    {
        title: `What is the output of the following program:
        salary = 8000
        function printSalary() {
          salary = 12000
          console.log("Salary:", salary)
        }
        
        printSalary()
        console.log("Salary:", salary)`,
        options: [
            'Salary: 12000 Salary: 8000',
            'Salary: 8000 Salary: 12000',
            'The program failed with errors',
            'i dont know yet'
        ],
        answer: '0',
        score: 4
        
    },
    {
        title: 'Full form of URL is ?',
        options: [
            'Uniform Resource Locator',
            'Uniform Resource Link',
            'Uniform Registered Link',
            'Unified Resource Link'
        ],
        answer: '0',
        score: 2
    },
     {
        title: 'What is inheritance in Python?',
        options: [
            'The process of creating a new class from an existing class',
            'The process of extending the functionalities of a class',
            'The process of removing a class',
            'None of the above'
        ],
        answer: '0',
        score: 2
    },

     {
        title: 'What is the purpose of the __init__ method in Python classes?',
        options: [
            'To initialize class variables',
            'To destroy the class object',
            'To create a new instance of the class',
            'None of the above'
        ],
        answer: '0',
        score: 2
    },
    {

    title: 'What is the correct syntax to create an instance of a class in Python?',
        options: [
            'my_instance = MyClass()',
            'MyClass = new MyClass()',
            'my_instance = new MyClass()',
            'None of the above'
        ],
        answer: '0',
        score: 2
    },
{
    title: 'What is encapsulation in Python?',
        options: [
            'The process of hiding the implementation details of a class',
            'The process of making all class members public',
            'The process of creating a private class',
            'None of the above'
        ],
        answer: '0',
        score: 2
    },

    

    {
    title: 'What will be the value of x after the following Python code is executed?',
        code: `
        def func(x):
            x += 10
            return x

        x = 5
        func(x)
        print(x)`,
        options: [
            '5',
            '10',
            '15',
            'Error'
        ],
        answer: '0',
        score: 6
    },
{
        title: 'Identify the error in the following Python code:',
        code: `
        def foo():
            print(y)
            y = 10

        foo()`,
        options: [
            'No error',
            'NameError: name \'y\' is not defined',
            'SyntaxError: invalid syntax',
            'TypeError: foo() takes 0 positional arguments but 1 was given'
        ],
        answer: '1',
        score: 6
    },
    {
        title: 'Write a Python class named Rectangle constructed by a length and width and a method which will compute the area of a rectangle.',
        code: `
        class Rectangle:
            def __init__(self, length, width):
                self.length = length
                self.width = width
            
            def area(self):
                return self.length * self.width

        rect = Rectangle(4, 5)
        print(rect.area())`,
        options: [
            '9',
            '15',
            '20',
            'Error'
        ],
        answer: '2',
        score: 8
    },

    {
    title: 'What is the output of the following Python code?',
        code: `
        class MyClass:
            def __init__(self):
                self.x = 10
        
        obj = MyClass()
        print(obj.x + 5)`,
        options: [
            '10',
            '15',
            '20',
            'Error'
        ],
        answer: '2',
        score: 8
    },

    {
        title: 'Identify the error in the following Python code:',
        code: `
        class MyClass:
            pass

        print(MyClass.__name__)`,
        options: [
            'No error',
            'AttributeError: type object \'MyClass\' has no attribute \'__name__\'',
            'SyntaxError: invalid syntax',
            'TypeError: MyClass object is not callable'
        ],
        answer: '0',
        score: 4
    },
    
    {
        title: 'What is the purpose of inheritance in object-oriented programming?',
        options: [
            'To create new classes with modified or additional features',
            'To hide the implementation details of a class',
            'To encapsulate data and methods',
            'To create objects'
        ],
        answer: '0',
        score: 2
    },
     {
        title: 'What is the output of the following Python code?',
        code: `
        class A:
            def __init__(self):
                self.x = 1

        class B(A):
            def __init__(self):
                super().__init__()
                self.y = 2

        obj = B()
        print(obj.x, obj.y)`,
        options: [
            '1 2',
            '2 1',
            'Error',
            'None'
        ],
        answer: '0',
        score: 8
    },

     {
        title: 'What is the output of the following Python code?',
        code: `
        class A:
            def __init__(self):
                self.x = 1

        class B(A):
            def __init__(self):
                super().__init__()
                self.x = 2

        obj = B()
        print(obj.x)`,
        options: [
            '1',
            '2',
            'Error',
            'None'
        ],
        answer: '1',
        score: 8
    },

     {
        title: 'What is the output of the following Python code?',
        code: `
        class A:
            def __init__(self):
                self.x = 1

        class B(A):
            def __init__(self):
                self.y = 2

        obj = B()
        print(obj.x, obj.y)`,
        options: [
            '1 2',
            '2 1',
            'Error',
            'None'
        ],
        answer: '2',
        score: 8
    },

     {
        title: 'What is the result of 3 + 4 * 2 in Python?',
        options: [
            '14',
            '11',
            '20',
            'Error'
        ],
        answer: '1',
        score: 2
    },

    {
        title: 'What is the result of 10 / 3 in Python?',
        options: [
            '3.333',
            '3',
            '3.0',
            'Error'
        ],
        answer: '2',
        score: 2
    },

    {
        title: 'What is the output of the following code?',
        code: `
        x = 5
        x += 3
        print(x)`,
        options: [
            '5',
            '8',
            '15',
            'Error'
        ],
        answer: '1',
        score: 3
    },

{
        title: 'What is the result of 10 % 3 in Python?',
        options: [
            '3',
            '1',
            '0',
            'Error'
        ],
        answer: '1',
        score: 2
    },
        {
        title: 'What is the output of the following code?',
        code: `
        x = 5
        y = 2
        print(x ** y)`,
        options: [
            '25',
            '10',
            '7',
            'Error'
        ],
        answer: '0',
        score: 2
    },

];

function restartScreen() {
    document.querySelector('.quiz-heading').innerHTML = `Score : ${score}`
    const card = document.querySelector('.question-card');
    card.innerHTML = "<ul>";
    questions.forEach((ques) => {
        const html = `
        <li>${ques.title} <div class="answer-label">${ques.options[ques.answer]}</div></li>
        `;
        card.innerHTML += html;
    });
    card.innerHTML += "</ul>";
    document.querySelector('.answer-key').style.display ='block';
    document.querySelector('button').style.display ='block';
}

function resetradio() {
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.removeAttribute("disabled");
    });
    res.setAttribute("class","idle");
    res.innerHTML = "Empty";
}

function evaluate() {
    if(form.op.value == questions[qno].answer) {
        res.setAttribute("class","correct");
        res.innerHTML = "Correct";
        score += questions[qno].score;

    } 
    else {
        res.setAttribute("class","incorrect");
        res.innerHTML = "Incorrect";
    }
    document.querySelectorAll('[type="radio"]').forEach((radio) => {
        radio.setAttribute("disabled","");
    })
}

function getNextQuestion() {
    qno++;
    const ques = questions[qno];
    question.innerHTML = ques.title;
    codeSnippet.innerHTML = ques.code || ''; // Display code snippet if available
    const labels = document.querySelectorAll('label');
    labels.forEach((label, idx) => {
        label.innerHTML = ques.options[idx];
    }); 
}

function handleSubmit(e) {
    e.preventDefault();
    if(!form.op.value) {
        alert('Please select an option');
    }
    else if(form.submit.classList.contains('submit')) {
        evaluate();
        form.submit.classList.remove('submit');
        form.submit.value = "Next"
        form.submit.classList.add('next');
    }
    else if(qno < questions.length - 1 && form.submit.classList.contains('next')) {
        getNextQuestion();
        resetradio();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
    else if(form.submit.classList.contains('next')) {
        restartScreen();
        form.submit.classList.remove('next');
        form.submit.value = "Submit"
        form.submit.classList.add('submit');
        form.reset();
    }
}

function init() {
    document.body.innerHTML = `
        <h1 class="quiz-heading">FINAL PYTHON PROGRAMMING QUESTION 2024</h1>
        <div class="app-body">
            <h1 class="answer-key">Answers</h1>
            <div class="question-card">
                <h2 id='question'>Question</h2>
                <pre id="code-snippet"></pre> <!-- Container for code snippet -->
                <form>
                    <input type="radio" id="op1" name="op" value="0">
                    <label for="op1">op1</label><br>
                    <input type="radio" id="op2" name="op" value="1">
                    <label for="op2">op2</label><br>
                    <input type="radio" id="op3" name="op" value="2">
                    <label for="op3">op3</label><br>
                    <input type="radio" id="op4" name="op" value="3">
                    <label for="op4">op4</label><br>
                    <div id = "res" class="idle">Empty</div><br>
                    <input type="submit" name="submit" value = 'Submit' class = "submit"/>
                </form>
            </div>
            <button>Restart</button>
        </div>
    `;
   question = document.querySelector('#question');
   codeSnippet = document.querySelector('#code-snippet'); // Reference to code snippet container
   form = document.querySelector('form');
   res = document.querySelector('#res');
   qno = -1;
   score = 0;
   form.addEventListener('submit', handleSubmit);
   document.querySelector('button').addEventListener('click', init);
   getNextQuestion();
}

document.querySelector('button').addEventListener('click', init);
init();