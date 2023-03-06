import API from './fetchNews';
import render from './addListNews';

let queryMobile = window.matchMedia('(max-width: 767px)');

let Pagination = {

  code: '',

  // Utility

  // converting initialize data
  Extend: function(data) {
      data = data || {};
      Pagination.size = data.size;
      Pagination.page = data.page;
      Pagination.step = data.step;
      Pagination.name = data.name;
  },

  // add pages by number (from [s] to [f])
  Add: function(min, max) {
      for (let i = min; i < max; i++) {
          Pagination.code += '<button class="pagination-button">' + i + '</button>';
      }
  },

  // add first page with separator
  First: function() {
    Pagination.code += '<button class="pagination-button">1</button><i class="pagination-dots">...</i>';
},

  // add last page with separator
  Last: function() {
      Pagination.code += '<i class="pagination-dots">...</i><button class="pagination-button">' + Pagination.size + '</button>';
  },

  // --------------------
  // Handlers
  // --------------------

  disableButtonPrev: function() {
    let prevButton = document.querySelector('.prev-button');
    if(Pagination.page === 1) {
        prevButton.classList.add('disabled');
        prevButton.disabled = true;
      } else {
        prevButton.classList.remove('disabled');
        prevButton.disabled = false;
      }
  },

  enableButtonsPrev: function(){
    let prevButton = document.querySelector('.prev-button');
    if(Pagination.page > 1) {
       prevButton.classList.remove('disabled');
       prevButton.disabled = false;
    } 
  },

  enableButtonsNext: function(){
    let nextButton = document.querySelector('.next-button');
    if(Pagination.page > 1) {
        nextButton.classList.remove('disabled');
        nextButton.disabled = false;
    } 
  },

  disableButtonNext: function() {
    let nextButton = document.querySelector('.next-button');
    if(Pagination.page === Pagination.size) {
      nextButton.classList.add('disabled');
      nextButton.disabled = true;
    } else {
      nextButton.classList.remove('disabled');
      nextButton.disabled = false;
    }
  },

  handlePageButtonStatus: function() {
    Pagination.disableButtonPrev();
    Pagination.disableButtonNext();
  },


  // Fetch

  FetchNext: async function (pageNumBtn) {
    const res = await API.fetchNews(Pagination.name, pageNumBtn);
    console.log(pageNumBtn);
    render.addListNews(res.response.docs);
  },

  // change page
  Click: function() {
      Pagination.page = +this.innerHTML;
      Pagination.handlePageButtonStatus();
      console.log(Pagination.page);
      Pagination.FetchNext(Pagination.page);
      Pagination.Start();
  },

  // previous page
  Prev: function() {
      Pagination.page--;
      if (Pagination.page < 1) {
          Pagination.page = 1;
      }

      Pagination.disableButtonPrev();
      Pagination.enableButtonsNext();
      Pagination.FetchNext(Pagination.page);
      Pagination.Start();
  },

  // next page
  Next: function() {
      Pagination.page++;
      if (Pagination.page > Pagination.size) {
          Pagination.page = Pagination.size;
      }
      Pagination.disableButtonNext();
      Pagination.enableButtonsPrev();
      Pagination.FetchNext(Pagination.page);
      Pagination.Start();
  },

  // --------------------
  // Script
  // --------------------

  // binding pages
  Bind: function() {
      let button = Pagination.e.getElementsByTagName('button');
      for (let i = 0; i < button.length; i++) {
          if (+button[i].innerHTML === Pagination.page) button[i].classList.add('active');
          button[i].addEventListener('click', Pagination.Click, false);
      }
  },

  // write pagination
  Finish: function() {
      Pagination.e.innerHTML = Pagination.code;
      Pagination.code = '';
      Pagination.Bind();
  },

  // find pagination type
  Start: function() {
    if(queryMobile.matches) {
      if (Pagination.page < Pagination.step - 1) {
        Pagination.Add(Pagination.page, Pagination.page + 2);
        Pagination.Last();
      } else if(Pagination.page >= 2 && Pagination.page <= Pagination.size - 2) {
        Pagination.First();
        Pagination.Add(Pagination.page, Pagination.page + 1);
        Pagination.Last();
      } else if(Pagination.page >= Pagination.size - 1) {
        Pagination.First();
        Pagination.Add(Pagination.size - 2, Pagination.size + 1);
      }

   
    } else {
      if (Pagination.size < Pagination.step * 2 + 6) {
        Pagination.Add(1, Pagination.size + 1);
      }
  
      else if (Pagination.page < Pagination.step + 1) {
          Pagination.Add(1, Pagination.step + 2);
          Pagination.Last();
  
      }
  
      else if (Pagination.page > Pagination.size - Pagination.step) {
        Pagination.First();
        Pagination.Add(Pagination.size - Pagination.step, Pagination.size + 1);
      }
  
      else {
        Pagination.First();
        Pagination.Add(Pagination.page - 1, Pagination.page + Pagination.step - 1);
        Pagination.Last();
      }
      
    }
    Pagination.Finish();
  },

  // --------------------
  // Initialization
  // --------------------

  // binding buttons
  Buttons: function(e) {
      let nav = e.getElementsByTagName('button');
      nav[0].addEventListener('click', Pagination.Prev, false);
      nav[1].addEventListener('click', Pagination.Next, false);
  },

  // create skeleton
  Create: function(e) {

      let html = [
          '<button class="prev-button disabled">Prev</button>', // previous button
          '<div class="pagination-buttons"></div>',  // pagination container
          '<button class="next-button">Next</button>'  // next button
      ];

      e.innerHTML = html.join('');
      Pagination.e = e.getElementsByTagName('div')[0];
      Pagination.Buttons(e);
  },

  // init
  Init: function(e, data) {
      Pagination.Extend(data);
      Pagination.Create(e);
      Pagination.Start();
  }
};


// Initialization
const paginationTotal = 99;
let init = function(queryName, pageNum) {
  Pagination.Init(document.getElementById('pagination-container'), {
      size: paginationTotal, // pages size
      page: pageNum,  // selected page
      step: 3,   // pages before and after current
      name: queryName,   // queryName
  });
};

export default { init };