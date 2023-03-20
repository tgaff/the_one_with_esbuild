import { Controller } from "@hotwired/stimulus"
// Note we could also just receive the URL to the image via a data value.
// That would be a slightly simpler solution assuming you didn't need any additional
// manipulations.
import bunny from "../images/bunny.jpg"


// Connects to data-controller="image-loader"
export default class extends Controller {

  /*
    This demonstrates loading an image in JS.  But considering the Hotwire stack
    we're using here it may have been simpler to just do this through a turbo
    frame or stream (if not just plain HTML..).  This is just a demo. ;)
  */

  connect() {
    const img = new Image(400, 300)
    img.src = bunny

    this.element.appendChild(img)
  }
}
