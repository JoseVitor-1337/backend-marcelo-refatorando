"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveParticipantInSearchIntoDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class SaveParticipantInSearchIntoDatabase {
    async updateSearchToAddParticipant(searchId, participantId) {
        const updatedSearch = await Search_1.default.findByIdAndUpdate(searchId, {
            $push: {
                status: {
                    participantId: participantId,
                    answeredQuestions: [],
                    correctQuestions: [],
                    status: "Pendente",
                    attempts: 0,
                },
                participants: participantId,
            },
        }, {
            new: true,
            lean: true,
        });
        return updatedSearch;
    }
}
exports.SaveParticipantInSearchIntoDatabase = SaveParticipantInSearchIntoDatabase;
