<template>
    <section id="floating-contact-options">
        <div class="hidden md:block">
            <div class="wrapper wrapper-left">
                <ul class="wrapper-ul">
                    <li v-for="(opt, index) of contactOptions" :key="index">
                        <a :href="opt.link" target="_blank">
                            <i :class="opt.icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="wrapper wrapper-right">
                <ul class="wrapper-ul">
                    <li class="add-margin-right">
                        <a :href="emailData.link" target="_blank" class="rotated-text add-hover">
                            {{ emailData.email }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex md:hidden w-full px-5 justify-center mt-48">
            <a v-for="(opt, index) of contactOptions" :key="index" :href="opt.link" target="_blank" class="mx-4">
                <i :class="`${opt.icon} icon-lg`"></i>
            </a>
            <a :href="emailData.link" target="_blank" class="mx-4">
                <i class="pi pi-envelope icon-lg"></i>
            </a>
        </div>
    </section>
</template>
<script setup>
    import { ref } from 'vue';

    const contactOptions = ref([
        {link: 'https://wa.me/5541984320432', icon: 'pi pi-whatsapp'},
        {link: 'https://github.com/Nickolasbini', icon: 'pi pi-github'},
        {link: 'https://www.linkedin.com/in/nickolas-alvaro-bini/', icon: 'pi pi-linkedin'}
    ])

    const emailData = {
        email: 'nickolasbini@hotmail.com',
        link: 'mailto:nickolasbini@hotmail.com'
    };
</script>

<style scoped>
    .wrapper{
        width: 40px;
        position: fixed;
        z-index: 10;   
    }
    .wrapper-left{
        bottom: 0px;
        left: 40px;
        right: auto;
    }
    .wrapper-right{
        bottom: 0px;
        right: 40px;
        left: auto;
    }
    .wrapper-ul{
        display: flex;
        flex-direction: column;
        -moz-box-align: center;
        align-items: center;
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    .wrapper-ul li:not(:last-child) {
        margin-bottom: 20px;
    }
    .wrapper-ul li:last-child:after{
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        margin-top: 20px;
        background-color: var(--silver)!important;
    }
    .wrapper-ul .add-margin-right:last-child:after{
        margin-right: -10px!important;
    }
    .wrapper-ul i{
        font-size: 1.5rem;
    }
    .wrapper-ul i:hover{
        transform: translateY(-3px)!important;
        color: var(--green-sea);
        transition: 0.2s ease;
    }
    .wrapper-ul .add-hover:hover{
        transform: translateY(-3px)!important;
        color: var(--green-sea);
        transition: 0.2s ease;
    }
    .rotated-text {
        writing-mode: vertical-rl;
        letter-spacing: 0.1em;
        white-space: nowrap;
        margin: 0 auto;
        text-align: center;
    }
</style>