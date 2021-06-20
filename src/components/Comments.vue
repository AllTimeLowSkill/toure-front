<template>
  <div>
    <ul class="list-group-flush margin-val">
      <Comment
        v-for="(comment, idx) in comments"
        :key="idx"
        :comment="comment"
      />
    </ul>
    <div class="d-flex margin-val">
      <textarea v-model="comment" type="text" class="form-control" />
      <button @click="addComments({ text: comment })" class="btn btn-success">
        Добавить комментарий
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Comment from './Comment'

export default {
  components: {
    Comment,
  },
  data() {
    return {
      comment: '',
    }
  },
  computed: {
    ...mapGetters({
      comments: 'comments',
    }),
  },
  methods: {
    ...mapMutations({
      addComments: 'ADD_COMMENTS',
    }),
  },
}
</script>

<style>
.margin-val {
  margin: 1rem;
}
</style>
