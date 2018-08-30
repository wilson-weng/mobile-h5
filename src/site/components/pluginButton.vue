<template>
    <div id="pluginButton" style="margin: 4px; display: inline-block">
        <el-popover trigger='click' placement="top" v-model="showPop">
            <div style="margin-bottom: 1rem; font-size: 1rem;">插件参数</div>
            <el-form label-position="left" label-width="120px" :model="propValues">
                <el-form-item :label="prop.comment" v-for="prop in plugin.props" :key="prop.name">
                    <el-input v-model="propValues[prop.name]" :disabled="disabled" style="width: 200px;"></el-input>
                </el-form-item>
                <div  v-if="plugin.props.length == 0">无参数</div>
                <el-form-item v-if="!disabled">
                    <el-button type="primary" v-if="isBind" @click="onPluginChange('update')">修改</el-button>
                    <el-button type="danger" v-if="isBind" @click="onPluginChange('remove')">移除</el-button>
                    <el-button type="primary" v-if="!isBind" @click="onPluginChange('add')">添加</el-button>
                </el-form-item>
            </el-form>
            <div slot="reference" class="name-wrapper">
                <el-button :plain="true" type="info" size="small">
                    {{plugin.name}}
                    <i class="fa fa-th-list" v-if="plugin.props.length > 0"></i>
                </el-button>
            </div>
        </el-popover>
    </div>
</template>

<script>
    import { PLUGIN_NODE_MAP } from '../constants/pluginNodes';

    export default {
        props: ['plugin', 'props', 'disabled', 'isBind', 'onChange'],
        data() {
            return {
                nodeMap: PLUGIN_NODE_MAP,
                showPop: false
            }
        },

        computed: {
            propValues() {
                return this.props? JSON.parse(this.props):{};
            }
        },

        methods: {
            onPluginChange(type){
                this.showPop = false;
                this.onChange && this.onChange(type, this.plugin.id, this.propValues);
            },
        },
    }
</script>
