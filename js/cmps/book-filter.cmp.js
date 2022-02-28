export default {
    template: `
        <section class="book-filter">
            <label>
            Filter By </label>
            <span class="price-range"> <b>Title: </b>
            <input  type="text" v-model="filterBy.title" placeholder="Search..."> </span>
            <!-- <span class="price-range"> <b>Price:</b> 0 -->
            <!-- <input @input="setFilter" type="range" v-model="filterBy.price" min="0" max="200" alt="value"> 200 </span> -->
            <span>Min:</span>
            <input  type="number" v-model="filterBy.fromPrice" >
            <span>Max:</span>
            <input  type="number" v-model="filterBy.toPrice" > 
            <button @click="setFilter">Filter</button>
        </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                price: 200,
                fromPrice: 0,
                toPrice: 0
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy });
        }
    }
}