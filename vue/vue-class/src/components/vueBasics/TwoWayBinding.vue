<template>
  <div class="form-class-container">
    <div>
      <h1>Form Class</h1>
      <p>
        Para poder conectar nuestros inputs[formControls] con nuestra
        data[formData], usamos la directiva v-model para poder implementar el
        concepto de <strong>two-way data handling</strong>
      </p>
    </div>
    <!-- Basic Example -->
    <!-- <h1>Message is {{ message }}</h1>
    <input type="text" v-model="message" /> -->

    <!-- Job Application Form -->
    <div id="myForm">
      <div id="form-v-model-visbility">
        <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
      </div>
      <form @submit.prevent="submitForm">
        <div id="user-input-formName-data-ref">
          <label for="name">Name</label>
          <input
            type="text"
            autocomplete="off"
            id="name"
            v-model.trim.lazy="formValues.formName"
          />
        </div>
        <div id="user-input-profileSummary-data-ref">
          <label for="profile">Profile Summary</label>
          <textarea
            name="profile"
            id="profile"
            cols="30"
            rows="10"
            v-model.trim.lazy="formValues.profileSummary"
          />
        </div>
        <div id="user-input-country-data-ref">
          <label for="country">Country</label>
          <select name="country" id="country" v-model="formValues.country">
            <option>Select a country</option>
            <option value="spain">Spain</option>
            <option value="usa">United States</option>
            <option value="estonia">Estonia</option>
            <option value="andorra">Andorra</option>
            <option value="cyprus">Cyprus</option>
            <option value="switzerland">Switzerland</option>
            <option value="venezuela">Venezuela</option>
          </select>
        </div>
        <div id="user-input-jobLocation-data-ref">
          <label for="job-location"
            >Are you willig to relocate to any of these countries?</label
          >
          <select
            name="job-location"
            multiple
            id="job-location"
            v-model="formValues.jobLocation"
          >
            <option>Select more than ne country</option>
            <option value="qatar">Qatar</option>
            <option value="ksa">Saudi Arabia</option>
            <option value="japan">Japan</option>
            <option value="new-zealand">New Zeleand</option>
          </select>
        </div>

        <div id="user-input-remoteWork-data-ref">
          <input
            type="checkbox"
            id="remote-work"
            v-model="formValues.remoteWork"
          />
          <label for="remote-work">Are you open to work fully remote?</label>
        </div>
        <div id="user-input-skillSet-data-ref">
          <label>What are your programming skills?</label>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="vue"
              value="vue"
              v-model="formValues.skillSet"
            />
            <label for="vue">Vue</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="html"
              value="html"
              v-model="formValues.skillSet"
            />
            <label for="html">Html</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="css"
              value="css"
              v-model="formValues.skillSet"
            />
            <label for="css">CSS</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="supabase"
              value="supabase"
              v-model="formValues.skillSet"
            />
            <label for="supabase">Supabase</label>
          </div>
        </div>

        <div id="user-input-yearsOfExperience-data-ref">
          <label>Years of experience</label>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="0-3"
              value="0-3"
              v-model="formValues.yearsOfExperience"
            />
            <label for="0-3">0-3</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="4-6"
              value="4-6"
              v-model="formValues.yearsOfExperience"
            />
            <label for="4-6">4-6</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="radio"
              id="7-10"
              value="7-10"
              v-model="formValues.yearsOfExperience"
            />
            <label for="7-10">7-10</label>
          </div>
        </div>

        <div id="user-input-profileAge-data-ref">
          <label for="profile-age">How old are you?</label>
          <input
            type="number"
            id="profile-age"
            v-model.number="formValues.profileAge"
            @keyup.enter="submitForm"
          />

          <!-- Using another type of event to submit form via @keyup.enter.  "enter" in this case is a vue form control modifier that enables the form submission witout having to use a CTA. -->
          <!-- <input
            type="number"
            id="profile-age"
            v-model.number="formValues.profileAge"
            @keyup.enter="submitForm"
          /> -->
        </div>
        <button>Submit Form</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");

// Job Application Data  - stored within an object
const formValues = ref({
  formName: "",
  profileSummary: "",
  country: "",
  jobLocation: [],
  remoteWork: false,
  skillSet: [],
  yearsOfExperience: "",
  profileAge: null,
});

function submitForm() {
  console.log("Form Values", formValues);
}
</script>

<style scoped>
pre {
  font-size: 32px;
}
div {
  display: flex;
  flex-direction: column;
}

.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}

.form-class-container {
  min-width: 75%;
}
</style>
