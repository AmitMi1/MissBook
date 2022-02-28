export default {
    template: `
        <section class="book-filter">
            <label>
            Filter By </label>
            <span class="price-range"> <b>Title: </b>
            <input type="text" v-model="filterBy.title" placeholder="Search..."> </span>
            <!-- <span class="price-range"> <b>Price:</b> 0 -->
            <!-- <input @input="setFilter" type="range" v-model="filterBy.price" min="0" max="200" alt="value"> 200 </span> -->
            <span>Min:</span>
            <input class="price-input" type="number" v-model="filterBy.fromPrice" placeholder="Min price" >
            <span>Max:</span>
            <input class="price-input" type="number" v-model="filterBy.toPrice" placeholder="Max price"> 
            <button class="btn-filter" @click="setFilter"><i class="fa-solid fa-filter"></i></button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: '',
                toPrice: ''
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy })
        }
    }
}