import { Controller } from "@hotwired/stimulus"
import * as Popper from "@popperjs/core"
import * as bootstrap from "bootstrap"

export default class extends Controller {
  static targets = ['tooltip']

  tooltipTargetConnected(element) {
    new bootstrap.Tooltip(element)
  }
}
