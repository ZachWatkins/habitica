<template>
  <div class="sidebar py-4 d-flex flex-column">
    <!-- staff -->
    <div class="ml-4">
      <h2>
        {{ $t('staff') }}
      </h2>
      <div class="d-flex flex-wrap">
        <div
          v-for="user in staff"
          :key="user.uuid"
          class="staff col-6 p-0"
        >
          <div class="d-flex">
            <router-link
              class="title"
              :to="{'name': 'userProfile', 'params': {'userId': user.uuid}}"
            >
              {{ user.name }}
            </router-link>
            <div
              v-if="user.type === 'Staff'"
              class="svg-icon staff-icon ml-1"
              v-html="icons.tierStaff"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- player tiers -->
    <div class="ml-4">
      <h2 class="mt-4 mb-1">
        {{ $t('playerTiers') }}
      </h2>
      <ul class="tier-list">
        <li
          v-once
          class="tier1 d-flex justify-content-center"
        >
          {{ $t('tier1') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tier1"
          ></div>
        </li>
        <li
          v-once
          class="tier2 d-flex justify-content-center"
        >
          {{ $t('tier2') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tier2"
          ></div>
        </li>
        <li
          v-once
          class="tier3 d-flex justify-content-center"
        >
          {{ $t('tier3') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tier3"
          ></div>
        </li>
        <li
          v-once
          class="tier4 d-flex justify-content-center"
        >
          {{ $t('tier4') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tier4"
          ></div>
        </li>
        <li
          v-once
          class="tier5 d-flex justify-content-center"
        >
          {{ $t('tier5') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tier5"
          ></div>
        </li>
        <li
          v-once
          class="tier6 d-flex justify-content-center"
        >
          {{ $t('tier6') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tier6"
          ></div>
        </li>
        <li
          v-once
          class="tier7 d-flex justify-content-center"
        >
          {{ $t('tier7') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tier7"
          ></div>
        </li>
        <li
          v-once
          class="moderator d-flex justify-content-center"
        >
          {{ $t('tierModerator') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tierMod"
          ></div>
        </li>
        <li
          v-once
          class="staff d-flex justify-content-center"
        >
          {{ $t('tierStaff') }}
          <div
            class="svg-icon ml-1"
            v-html="icons.tierStaff"
          ></div>
        </li>
        <li
          v-once
          class="npc d-flex justify-content-center"
        >
          {{ $t('tierNPC') }}
        </li>
      </ul>
    </div>
    <!-- Daniel in sweet, sweet retirement with Jorts -->
    <div>
      <div class="gradient">
      </div>
      <div
        class="grassy-meadow-backdrop"
        :style="{'background-image': imageURLs.background}"
      >
        <div
          class="daniel_front"
          :style="{'background-image': imageURLs.npc}"
        ></div>
        <div
          class="pixel-border"
          :style="{'background-image': imageURLs.pixel_border}"
        ></div>
      </div>
    </div>

    <!-- email admin -->
    <div class="d-flex flex-column justify-content-center">
      <div class="question mx-auto">
        {{ $t('anotherQuestion') }}
      </div>
      <div
        class="contact mx-auto"
      >
        <p v-html="$t('contactAdmin')"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~@/assets/scss/colors.scss';

  .sidebar {
    height: fit-content;
    width: 330px;
    background-color: $gray-700;
    border-radius: 16px;

    h2 {
      color: $gray-10;
      font-family: Roboto;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.71;
    }

    .staff {
      .staff-icon {
        width: 10px;
        margin-top: 5px;
      }

      .title {
        height: 24px;
        color: $purple-300;
        font-weight: bold;
        display: inline-block;
        margin-bottom: 4px;
      }
    }

    .tier-list {
      list-style-type: none;
      padding: 0;
      width: 282px;
      font-size: 1em !important;

        li {
          height: 40px;
          border-radius: 4px;
          border: solid 1px $gray-500;
          text-align: center;
          padding: 8px 0;
          margin-bottom: 8px;
          margin-right: 4px;
          font-weight: bold;
          line-height: 1.71;
        }

      .tier1 {
        color: #c42870;
        .svg-icon {
          width: 11px;
          margin-top: 5px;
        }
      }

      .tier2 {
        color: #b01515;
        .svg-icon {
          width: 11px;
          margin-top: 5px;
        }
      }

      .tier3 {
        color: #d70e14;
        .svg-icon {
          width: 13px;
          margin-top: 4px;
        }
      }

      .tier4 {
        color: #c24d00;
        .svg-icon {
          width: 13px;
          margin-top: 4px;
        }
      }

      .tier5 {
        color: #9e650f;
        .svg-icon {
          width: 8px;
          margin-top: 7px;
        }
      }

      .tier6 {
        color: #2b8363;
        .svg-icon {
          width: 8px;
          margin-top: 7px;
        }
      }

      .tier7 {
        color: #167e87;
        .svg-icon {
          width: 12px;
          margin-top: 4px;
        }
      }

      .moderator {
        color: #277eab;
        .svg-icon {
          width: 13px;
          margin-top: 3px;
        }
      }

      .staff {
        color: #6133b4;
        .svg-icon {
          width: 10px;
          margin-top: 7px;
        }
      }

      .npc {
        color: $black;
      }
    }

    .gradient {
      position: absolute;
      width: 330px;
      height: 100px;
      margin: -1px 0 116px;
      background-image: linear-gradient(to bottom, $gray-700 0%, rgba(249, 249, 249, 0) 100%);
    }

    .grassy-meadow-backdrop {
      background-repeat: repeat-x;
      width: 330px;
      height: 246px;
    }

    .daniel_front {
      height: 246px;
      width: 330px;
      background-repeat: no-repeat;
      margin: 0 auto;
    }

    .pixel-border {
      width: 330px;
      height: 30px;
      background-repeat: no-repeat;
      position: absolute;
      margin-top: -30px;
    }

    .question {
      font-size: 1em;
      font-weight: bold;
      line-height: 1.71;
      color: $gray-10;
      margin-top: 24px;
    }

    .contact p {
      font-size: 1em;
      margin-bottom: 0px;
    }
  }
</style>

<script>
import tier1 from '@/assets/svg/tier-1.svg';
import tier2 from '@/assets/svg/tier-2.svg';
import tier3 from '@/assets/svg/tier-3.svg';
import tier4 from '@/assets/svg/tier-4.svg';
import tier5 from '@/assets/svg/tier-5.svg';
import tier6 from '@/assets/svg/tier-6.svg';
import tier7 from '@/assets/svg/tier-7.svg';
import tierMod from '@/assets/svg/tier-mod.svg';
import tierNPC from '@/assets/svg/tier-npc.svg';
import tierStaff from '@/assets/svg/tier-staff.svg';
import staffList from '../../libs/staffList';

export default {
  data () {
    return {
      icons: Object.freeze({
        tier1,
        tier2,
        tier3,
        tier4,
        tier5,
        tier6,
        tier7,
        tierMod,
        tierNPC,
        tierStaff,
      }),
      imageURLs: {
        background: 'url(/static/npc/normal/tavern_background.png)',
        npc: 'url(/static/npc/normal/tavern_npc.png)',
        pixel_border: 'url(/static/npc/normal/pixel_border.png)',
      },
      staff: staffList,
    };
  },
};
</script>
