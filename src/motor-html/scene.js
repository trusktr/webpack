import 'document-register-element'
//import 'webcomponents.js-v1/src/CustomElements/v1/native-shim'
//import 'webcomponents.js-v1/src/CustomElements/v1/CustomElements'

import styles from './scene-style'
import Scene from '../motor/Scene'
import MotorHTMLBase from './base'

console.log(' -- motor-scene module!')

export default
document.registerElement('motor-scene',
class MotorHTMLScene extends MotorHTMLBase {

    // this is called in attachedCallback, at which point this element has a
    // parentNode.
    _makeImperativeCounterpart() {
        const scene = new Scene(this)

        // TODO: needs unmount cleanup.
        // TODO: move to attachedCallback.
        scene.mount(this.parentNode)

        return scene
    }

    getStyles() {
        return styles
    }

    attachedCallback() {
        super.attachedCallback()
    }

    //deinit() {
        //super.deinit()

        //// TODO: unmount the scene
    //}
})
