<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Profile
      <nuxt-link slot="right" to="/" class="button">
        Dashboard
      </nuxt-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <profile-update-form class="tile is-child" />
        <card-component title="Profile" icon="account" class="tile is-child">
          <user-avatar class="image has-max-width is-aligned-center" />
          <hr />
          <b-field label="Name">
            <b-input :value="userName" custom-class="is-static" readonly />
          </b-field>
          <hr />
          <b-field label="E-mail">
            <b-input :value="userEmail" custom-class="is-static" readonly />
          </b-field>
        </card-component>
      </tiles>
      <password-update-form />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '@/components/Widgets/CardComponent'
import TitleBar from '@/components/Widgets/TitleBar'
import HeroBar from '@/components/Widgets/HeroBar'
import ProfileUpdateForm from '@/components/Widgets/ProfileUpdateForm'
import PasswordUpdateForm from '@/components/Widgets/PasswordUpdateForm'
import Tiles from '@/components/Widgets/Tiles'
import UserAvatar from '@/components/Widgets/UserAvatar'
export default {
  name: 'Profile',
  components: {
    UserAvatar,
    Tiles,
    PasswordUpdateForm,
    ProfileUpdateForm,
    HeroBar,
    TitleBar,
    CardComponent
  },
  computed: {
    titleStack () {
      return ['Admin', 'Profile']
    },
    ...mapState(['userName', 'userEmail'])
  },
  head () {
    return {
      title: 'Profile — Admin One Nuxt.js'
    }
  }
}
</script>
