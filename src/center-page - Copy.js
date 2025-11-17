import './center-page.css'
import './BookCarForm.js'
import BookCarForm from './BookCarForm.js';
import Top_Cars from './Top-cars.js'; 


function Centerpage(){
    return(
     <> 
  <section class="container-fluid py-5 text-center position-relative" id="menu">
  <div class="overlay"></div>

  <div class="row justify-content-center position-relative">
    <div class="col-12 col-md-8">
      <p class="fs-3 animate-text">Plan your trip now</p>
      <h2 class="display-5 fw-bold animate-text">
        Save <span>big</span> with our car rental
      </h2>

    <a href='#Bookcar-form'>  <button class="btn btn-danger rounded-pill mt-3 px-4 py-2 animate-btn">
           Book Ride
      </button></a>

    </div>
  </div>
</section>


     <BookCarForm></BookCarForm>
     <Top_Cars></Top_Cars>

    </> 
    );
}
export default Centerpage;