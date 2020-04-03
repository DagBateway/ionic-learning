import { Component, OnInit } from "@angular/core";
import { Activity } from "../types";
import { Observable } from "rxjs";
import { ActivityService } from "../activity.service";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ActivityVideoPage } from "../activity-video/activity-video.page";

@Component({
  selector: "app-activity-detail",
  templateUrl: "./activity-detail.page.html",
  styleUrls: ["./activity-detail.page.scss"]
})
export class ActivityDetailPage implements OnInit {
  activityDetail: Observable<Activity>;

  constructor(
    private _modalController: ModalController,
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
  ) {
    const activityID = activatedRoute.snapshot.params["activityID"];
    console.log(activityID);
    this.activityDetail = activityService.getactivity(activityID);
  }

  ngOnInit() {}

  async openModal() {
    const videoModal = await this._modalController.create({
      component: ActivityVideoPage
    });

    return await videoModal.present();
  }
}
