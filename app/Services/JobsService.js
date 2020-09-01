import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"


class JobsService {

  async getJobs() {

    let results = await api.get('jobs')
    ProxyState.jobs = results.data.data.map(j => new Job(j))

  }
  async removeJob() {

    await api.delete(`jobs/${id}`)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
  }


  async apply() {

    let job = ProxyState.jobs.find(j => j.id === id)
    if (!job) {
      throw new Error("Job Not Found");
    }
    job.price += 100
    let result = await api.put(`jobs/${id}`, { price: job.price })
    ProxyState.jobs = ProxyState.jobs
  }


  async createJob(newJob) {
    let results = await api.post('jobs', newJob)
    let job = new Job(results.data.data)
    ProxyState.jobs = [...ProxyState.jobs, job]

  }
}

const SERVICE = new JobsService();
export default SERVICE;