import QtQuick 2.0
import QtQuick.Controls 2.13
import QtQuick.Layouts 1.13
import QtMultimedia 5.13
import RostikObjects 1.0

Rectangle {
    property bool replaceblePanel: true;
    property string panelDevTitle: "MuseumsPanel";
    property string panelTitle: qsTr("Museums")
    color: "yellow";

    ColumnLayout {
        anchors.fill: parent;

        Rectangle {
            Layout.preferredHeight: 30;
            Layout.fillWidth: true;

            color: "gray";

            RowLayout {
                anchors.fill: parent;

                Button {
                    Layout.fillHeight: true;
                    Layout.fillWidth: true;

                    text: "Find museum...";

                    background: Rectangle {
                        color: {
                            if(sv.currentIndex === 0) return "gray";
                            return "white";
                        }
                    }

                    onClicked: sv.setCurrentIndex(0);
                }

                Button {
                    Layout.fillHeight: true;
                    Layout.fillWidth: true;

                    text: "Find museum...";

                    background: Rectangle {
                        color: {
                            if(sv.currentIndex === 1) return "gray";
                            return "white";
                        }
                    }
                    onClicked: sv.setCurrentIndex(1);
                }
            }
        }

        SwipeView {
            id: sv;
            currentIndex: 0;

            Layout.fillHeight: true;
            Layout.fillWidth: true;

            ColumnLayout {

                TextField {
                    Layout.fillWidth: true;
                    Layout.preferredHeight: 30;

                    placeholderText: "AA";
                }

                MuseumsList {
                    model: museums;
                }
            }

            MuseumsList {
                model: savedMuseums;
            }
        }
    }


}