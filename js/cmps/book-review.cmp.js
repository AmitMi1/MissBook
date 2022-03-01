import longText from './long-text.cmp.js'

export default {
  props: ['review'],
  template: `
        <section class="book-review flex align-center center column">
            <!-- <div class="img-container"> -->
                <!-- <img class="user-img" :src="'.././imgs/user_icon_' + review.idImg + '.png'"> -->
            <!-- </div> -->
                <!-- <div class="review-info"> -->
                <div class="writer-name">Name: {{review.name}}</div>
                <p>Rating: {{review.rating}}</p>
                <p class="read-at">Read at: {{review.readAt}}</p>
                <p>Review: {{ review.text }}
                  <button @click="deleteR">X</button>
                </p>
                <hr>
                <!-- <long-text :txt="review.textarea"></long-text> -->
               <!-- </div> -->

        </section>
    `,
  components: {
    longText,
  },
  created() { },
  data() {
    return {

    }
  },
  methods: {
    deleteR() {
      console.log('delete');
      this.$emit('remove-review', this.review.id)
    },

  },
  computed: {
    getImgSrc(num) {
      console.log(num);
      return '.././imgs/user_icon_' + num + '.png'
    }
  },
  unmounted() { },
  emits: ['remove-review']
}