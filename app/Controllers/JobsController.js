import { ProxyState } from "../AppState.js";
import jobsService from "../Services/JobsService.js";

//Private
function _drawJobs() {

  let jobs = ProxyState.jobs
  let templates = ''
  jobs.forEach(j => templates += j.Template)
  document.getElementById('dataj').innerHTML = templates
}


//Public
export default class JobsController {

  constructor() {
    ProxyState.on('jobs', _drawJobs)
    this.getJobs();
  }

  getJobs() {

    try {
      jobsService.getJobs();
    } catch (error) {
      console.error(error)
    }
  }

  createJob() {
    event.preventDefault();
    let form = event.target
    let newJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      jobTitle: form.jobtitle.value,
      // @ts-ignore
      rate: form.rate.value,
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      hours: form.hours.value
    }
    try {
      jobsService.createJob(newJob)
    } catch (error) {
      console.error(error)
    }
  }

  removeJob(id) {
    try {
      jobsService.removeJob(id)
    } catch (error) {
      console.error(error)
    }
  }


  apply(id) {
    try {
      jobsService.apply(id)
    } catch (error) {
      console.error(error)
    }
  }









}

