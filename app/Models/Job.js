export default class Job {

  constructor({ _id, company, jobTitle, rate, hours, description }) {
    this.id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.rate = rate
    this.hours = hours
    this.description = description || 'No Description'
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src=".//placehold.it/200x200" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.company} - ${this.jobTitle} - ${this.hours}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.jobsController.bid('${this.id}')">Apply</button>
              </div>
          </div>
      </div>
    </div>`
  }






}