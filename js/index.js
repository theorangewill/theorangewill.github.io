$(function(){
    $('[data-toggle="technicalknowledge-popover-c"]').popover({
        title: 'C/C++',
        content: 'I learned C language in my graduation, as almost all programming classes used it. However, I also started to use C++ in some college assigments and in my undergraduate thesis.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-python"]').popover({
        title: 'Python',
        content: 'I started to learn Python in my first year of graduation with some professors and students that wanted to translate the Python\'s book to portuguese. I also was a learning mentor for high school students who wanted to learn Python. The code developed in my master\'s degree was also developed in Python.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-java"]').popover({
        title: 'Java',
        content: 'I learned Java in the Object-Oriented Programming discipline at my graduation. In my internship in Index I also made use of Java.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-sql"]').popover({
        title: 'SQL',
        content: 'I learned SQL in the Database discipline in my graduation. I was very interested in this field at the time and improved my SQL knowledge by taking the optional discipline Laboratory of Database.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-openmp"]').popover({
        title: 'OpenMP',
        content: 'I got to know OpenMP during the research for my undergraduate thesis and developed the whole solution with it.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-htmlcss"]').popover({
        title: 'HTML+CSS',
        content: 'I wanted to learn web programming and started to learn HTML and CSS on my own. I developed a Wordpress theme while I was learning. This experience helped me to create this template as well.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-php"]').popover({
        title: 'PHP',
        content: 'I learned the basics of PHP when developing a Wordpress theme.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-wordpress"]').popover({
        title: 'Wordpress',
        content: 'I wanted to learn web programming and after developing a static template using HTML5, I started to improve the template and made it dynamic using the Wordpress.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-git"]').popover({
        title: 'Git',
        content: 'I started to learn Git on my own, but during my internship I had the experience of developing a large project with different developers.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-latex"]').popover({
        title: 'LaTeX',
        content: 'I learned LaTeX in my first year of graduation when translating the Python\'s book into portuguese. I have always used Overleaf to write my college assignments, including articles and master\'s thesis. I also taught a mini-course for LaTeX beginners at the university.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-photoshop"]').popover({
        title: 'Adobe Photoshop',
        content: 'Since my adolescence I was interested in Photoshop and learned the basics of image editing.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-linux"]').popover({
        title: 'Linux',
        content: 'Linux has been the main operating system since 2014, both for development and leisure.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-cuda"]').popover({
        title: 'CUDA',
        content: 'I learned a little bit of CUDA in a mini-course of MPI+CUDA.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-mpi"]').popover({
        title: 'MPI',
        content: 'I learned MPI during the course of Parallel Algorithms in my graduation and I also took a mini-course of CUDA + MPI.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-riscv"]').popover({
        title: 'RISC-V',
        content: 'I learned RISC-V during my teaching internship for my master\'s degree.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="technicalknowledge-popover-arduino"]').popover({
        title: 'Arduino',
        content: 'I learned Arduino in my graduation in an optional subject and I had experience during my internship in graduation when developing a turnstile for a university restaurant.',
        placement: 'bottom',
        trigger: 'hover'
    });



    $('[data-toggle="theoryknowledge-popover-ilp"]').popover({
        title: 'Integer Linear Programming',
        content: 'I worked with ILP in my graduation, developing a solution for the University Course Schedule Problem, and also in my Scientific Initiation.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="theoryknowledge-popover-parallel"]').popover({
        title: 'Parallel Programming',
        content: 'My undergraduate thesis was focused on parallelizing Lee\'s algorithm and that taught me parallel techniques and how to get around problems that parallelism faces. It also helped me to develop parallel thinking when I am coding.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="theoryknowledge-popover-cloud"]').popover({
        title: 'Cloud Computing',
        content: 'My master\'s is all focused in cloud computing. My proposed required me to learn how this environment works and to understand different AWS services.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="theoryknowledge-popover-compiler"]').popover({
        title: 'Compilers',
        content: 'I have always been interested in compilers and started to develop an esoteric programming language using LLVM to learn more about it.',
        placement: 'bottom',
        trigger: 'hover'
    });
    $('[data-toggle="theoryknowledge-popover-web"]').popover({
        title: 'Web Programming',
        content: 'To learn more about web programming, I started to create a template using HTML and CSS, in the end it became a Wordpress theme.',
        placement: 'bottom',
        trigger: 'hover'
    });
});

$('.github-catalog-body').flickity({
    cellAlign: 'left',
    contain: true,
    groupCells: true,
    freeScroll: true,
    cellAlign: 'center'
});
$('.projects-content').masonry({
    itemSelector: '.project-card',
    columnWidth: '.project-card',
    gutter: 10,
    fitWidth: true
});
$(function(){
    new WOW({
        mobile: false
    }).init();
});
$('#education1').click(function(){
    $('#education1-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});
$('#education2').click(function(){
    $('#education2-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});
$('#experience1').click(function(){
    $('#experience1-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});
$('#experience22').click(function(){
    $('#experience22-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});
$('#experience21').click(function(){
    $('#experience21-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});
$('#experience3').click(function(){
    $('#experience3-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});
$('#research11').click(function(){
    $('#research11-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});
$('#research12').click(function(){
    $('#research12-text').toggleClass('ativo');
    $(this).toggleClass('ativo');
    $(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
});