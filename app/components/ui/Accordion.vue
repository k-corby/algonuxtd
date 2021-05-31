<template>
  <div class="accordion" role="tablist" style="width:100%;">
    <b-card v-for="(item, index) in data" :key="item" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + index" variant="info">
          <b-icon-plus></b-icon-plus><span>{{ item.title }}</span></b-button
        >
      </b-card-header>
      <b-collapse
        :id="'accordion-' + index"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-card-text>
            {{ item.info }}
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "user requirements",
          info:
            "The job of UX designers is to envision what their users should experience; research helps to gain this understanding. The goal during this stage is to understand who we design for. Creating personas Personas are archetypes of real users. It is a representation of a particular group of people with similar behavior, needs, goals, skills, attitudes, etc. Personas make it possible to bring your users to life and help understand their problems better. This understanding allows designers to make the right decisions about product features, navigation, interactions, visual design, and much more. To create a proper persona, you need to have a clear understanding of your target audience—people who will use your product. It is critical because if you fail to understand your target audience, chances are you will end up creating a wrong solution for them."
        },
        {
          title: "concept ideation",
          info:
            "To create a proper solution for the problem, it’s essential to look at the user interactions with a product or service holistically. Most of the time we want our product/feature fit in the existing ecosystem/product that users use. That’s why it’s vital to understand what typical interactions will look like. After you have this understanding, you can start to visualize the journey. Its possible to use various techniques for this. I recommend using a user journey map and storyboarding. A user journey map is an excellent tool for UX designers because it visualizes how a user interacts with a product and allows designers to see a product from a user’s point of view"
        },
        {
          title: "test and iterate",
          info:
            "Observation is a very powerful technique for collecting qualitative insights about your users. When you observe how real users interact with your product, you gain a lot of information on what works well for them. There are two techniques for validation design decisions – usability testing and contextual inquiries. Usability testing will help you understand what problems users face when they interact with your design. Contextual inquiry is a user research technique that involves observing and interviewing people while they perform tasks in context. This technique is a mix of qualitative research and user interviews. The person who conducts a contextual inquiry (a researcher) observes how participants perform their tasks and has them talk about what they are doing while they are interacting with a product."
        }
      ],
      text: [
        "The job of UX designers is to envision what their users should experience; research helps to gain this understanding. The goal during this stage is to understand who we design for. Creating personas Personas are archetypes of real users. It is a representation of a particular group of people with similar behavior, needs, goals, skills, attitudes, etc. Personas make it possible to bring your users to life and help understand their problems better. This understanding allows designers to make the right decisions about product features, navigation, interactions, visual design, and much more. To create a proper persona, you need to have a clear understanding of your target audience—people who will use your product. It is critical because if you fail to understand your target audience, chances are you will end up creating a wrong solution for them.",
        "",
        ""
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: none;
  border: none;
}
.accordion {
  .card-header {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #222;
  }

  .card:first-child .card-header {
    border-top: 2px solid #222;
  }

  .card {
    background-color: transparent;
    border: none;
  }

  button {
    background-color: transparent;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 5vw;
    font-weight: 800;
    text-align: left;
    letter-spacing: 0vw;
    color: #222;
    padding: 1vw 0;

    svg {
      color: #222;
    }
    span {
      padding-left: 5vw;
    }
  }

  button:hover {
    background-color: transparent;
  }

  .btn-info:not(:disabled):not(.disabled):active,
  .btn-info:not(:disabled):not(.disabled).active,
  .show > .btn-info.dropdown-toggle {
    background-color: transparent;
  }
}
</style>
