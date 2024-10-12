import { Page } from '@playwright/test';
import { Button, Checkbox, Modal } from '../../../page-factory';

export class ImageCropModal {
  private static readonly TOPIC_IMAGE_CROP_SUBMIT_BTN = '//button[@data-qa="saveImageBtn"]';
  private static readonly TOPIC_IMAGE_CROP_MODAL = '//div[@data-qa="imageCropModal"]';
  private static readonly TOPIC_IMAGE_CROP_CHECKBOX = '//input[@data-qa="imagePropCheckbox"]';

  private readonly imageCropModal: Modal;
  private readonly imageCropSubmitBtn: Button;
  private readonly imageCropCheckbox: Checkbox;

  constructor(public page: Page) {
    this.imageCropModal = new Modal({
      page,
      locator: ImageCropModal.TOPIC_IMAGE_CROP_MODAL,
      name: 'Модалка загрузки изображения',
    });

    this.imageCropSubmitBtn = new Button({
      page,
      locator: ImageCropModal.TOPIC_IMAGE_CROP_SUBMIT_BTN,
      name: 'Сохранить',
    });

    this.imageCropCheckbox = new Checkbox({
      page,
      locator: ImageCropModal.TOPIC_IMAGE_CROP_CHECKBOX,
      name: 'Пропорции',
    });
  }

  async clickSubmitBtn() {
    await this.imageCropSubmitBtn.click();
  }

  async checkCropCheckbox() {
    await this.imageCropCheckbox.check();
  }

  async checkModalIsOpened() {
    await this.imageCropModal.modalIsOpened();
  }
}
