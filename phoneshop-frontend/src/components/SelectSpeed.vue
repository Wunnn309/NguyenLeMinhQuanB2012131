<template>
    <section class="select-speed">
        <ul class="select-speed-list">
            <li class="select-speed-item"
                v-for="(item, index) in social"
                :key="index"
            >
                <a :href="item.href">
                    <img :src="item.dirImg" alt="img">
                </a>
            </li>
        </ul>
        <section class="back-to-top" @click="handleEvent">
            <div href="#">
                <img src="../assets/imgs/social-network/arrow-up.png" alt="img">
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'SelectSpeed',
    data(){
        var social = [
            {dirImg: '/src/assets/imgs/social-network/phone.png', href: 'tel: 0916548030'},
            {dirImg: '/src/assets/imgs/social-network/facebook.png', href: ''},
            {dirImg: '/src/assets/imgs/social-network/messenger.png', href: ''},
            {dirImg: '/src/assets/imgs/social-network/map.png', href: 'https://goo.gl/maps/ZCBRMvyuBCB2eN52A'},
            {dirImg: '/src/assets/imgs/social-network/youtube.png', href: ''},
            {dirImg: '/src/assets/imgs/social-network/email.png', href: ''},
        ]
        return {
            social,
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            const backToTopNode = document.querySelector('.back-to-top');
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                backToTopNode.style.display = 'block';
            }
            else {
                backToTopNode.style.display = 'none';
            }
        });
    },
    methods: {
        handleEvent(event) {
            const node = event.target;
            setTimeout(() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }, 700);
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/select-speed.scss';
</style>