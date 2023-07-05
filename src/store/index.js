import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: null,
    
    testimonials: null,
   
    skills: null,
   
    education: null,
    
  },
 
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;},
      
    setTestimonials: (state, testimonials) => {
        state.testimonials = testimonials;},
        
  setSkills: (state, skills) => {
          state.skills = skills;},

  setEducation: (state, education) => {
            state.education = education;
  },
},
  actions: {
    getProjects: async (context) => {
      fetch("https://ethan7lesar.github.io/data/db.json")
        .then((res) => res.json())
        .then((projects) => context.commit("setProjects", projects));}
  },

  getTestimonials: async (context) => {
    fetch("https://ethan7lesar.github.io/data/db.json")
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials));
  },

  getSkills: async (context) => {
    fetch("https://ethan7lesar.github.io/data/db.json")
      .then((res) => res.json())
      .then((skills) => context.commit("setSkills", skills));
  },

  getEducation: async (context) => {
    fetch("https://ethan7lesar.github.io/data/db.json")
      .then((res) => res.json())
      .then((education) => context.commit("setEducation", education));
  },

});
