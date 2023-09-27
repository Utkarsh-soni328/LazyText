import React from 'react';

export default function About(props) {
  return (
    <div>
        <h1 style={{color: props.mode==='light'?'black':'white'}} className="text-2xl font">About us</h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Features
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        you can edit and analyse long text here , plus you can listen long text and paragraphs in audio.
        More features are to be added in future.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact us
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <a href=""><i class="bi bi-linkedin">LinkedIn</i></a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
