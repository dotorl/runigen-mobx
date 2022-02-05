declare module 'RunigenModule' {
	export namespace Runigen {
		interface ICommunityUser {
			id: number;
			profileNickname: string; // 프로필 이름
			profileImgPath: string; // 프로필 사진
			grade?: string; // 코멘트에서 사용 될 grade 속성 ( 따로 interface로 만들어서 쓸지고민중 )
		}
		// 해당 커뮤니티의 아티스트 정보
		interface IArtist extends ICommunityUser {
			name: string;
			toFanLastId: number | null; // 아티스트가 마지막으로 남긴 모먼트
			toFanLastCreatedAt: string | null; // 아티스트가 마지막으로 남긴 모먼트 작성 일
			toFanLastExpireIn: number; // 아티스트가 마지막으로 남긴 모먼트의 남은 소통 시간
		}
		// 아티스트 목록
		interface IArtistResponse {
			artists: Artist[];
		}
		// 댓글
		interface IComment {
			id: number;
			communityUser: ICommunityUser;
			body: string; // 모먼트 내용
			likeCount: number; // 좋아요 갯수
			hasMyLike: boolean; // 본인의 좋아요 여부
			createdAt: string; // 작성일
			commentCount: number; // 코멘트에서 사용 될 commentCount 속성
		}
		// 댓글 결과
		interface ICommentResponse {
			comments: IComment[]; // 작성된 댓글들
			commentCount: number; // 총 댓글 수
		}

		// 첨부 사진
		interface IPhoto {
			id: number;
			thumbnailImgUrl: string; // 썸네일 이미지 소스
			thumbnailImgWidth: number; // 썸네일 이미지 너비
			thumbnailImgHeight: number; // 썸네일 이미지 높이
			orgImgUrl: string; // 원본 이미지 소스
			orgImgWidth: number; // 원본 이미지 너비
			orgImgHeight: number; // 원본 이미지 높이
		}
		// 포스트/모먼트
		interface Post {
			id: number;
			backgroundImageUrl?: string; // 배경 이미지 (첨부된 사진이 없을 경우 사용)
			communityUser: ICommunityUser; // 작성한 유저
			body: string; // 내용
			commentCount: number; // 댓글 갯수
			likeCount: number; // 좋아요 갯수
			hasMyLike: boolean; // 본인의 좋아요 여부
			createdAt: string; // 생성일
			expireIn: number; // 남은 소통 시간
			photos?: IPhoto[]; // 첨부된 사진 목록
		}
		// 포스트/모먼트 결과물
		interface IPostResponse {
			// 다음 포스트 정보
			afterPosts: {
				isEnded: boolean; // 다음 포스트 있는지 여부
				posts: IPost[]; // 다음 글들
			};
			// 이전 포스트 정보
			fromPosts: {
				isEnded: boolean; // 이전 포스트 있는지 여부
				posts: IPost[]; // 이전 글들
			};
			post: IPost; // 현재 포스트/모먼트
		}
	}
}
